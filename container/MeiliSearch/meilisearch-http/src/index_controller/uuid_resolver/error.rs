use meilisearch_error::{Code, ErrorCode};

pub type Result<T> = std::result::Result<T, UuidResolverError>;

#[derive(Debug, thiserror::Error)]
pub enum UuidResolverError {
    #[error("Index already exists.")]
    NameAlreadyExist,
    #[error("Index \"{0}\" not found.")]
    UnexistingIndex(String),
    #[error("Index must have a valid uid; Index uid can be of type integer or string only composed of alphanumeric characters, hyphens (-) and underscores (_).")]
    BadlyFormatted(String),
    #[error("Internal error: {0}")]
    Internal(Box<dyn std::error::Error + Sync + Send + 'static>),
}

internal_error!(
    UuidResolverError: heed::Error,
    uuid::Error,
    std::io::Error,
    tokio::task::JoinError,
    serde_json::Error
);

impl ErrorCode for UuidResolverError {
    fn error_code(&self) -> Code {
        match self {
            UuidResolverError::NameAlreadyExist => Code::IndexAlreadyExists,
            UuidResolverError::UnexistingIndex(_) => Code::IndexNotFound,
            UuidResolverError::BadlyFormatted(_) => Code::InvalidIndexUid,
            UuidResolverError::Internal(_) => Code::Internal,
        }
    }
}
