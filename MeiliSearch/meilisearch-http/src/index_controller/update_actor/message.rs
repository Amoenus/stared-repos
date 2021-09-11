use std::collections::HashSet;
use std::path::PathBuf;

use tokio::sync::{mpsc, oneshot};
use uuid::Uuid;

use super::error::Result;
use super::{PayloadData, UpdateMeta, UpdateStatus, UpdateStoreInfo};

pub enum UpdateMsg<D> {
    Update {
        uuid: Uuid,
        meta: UpdateMeta,
        data: mpsc::Receiver<PayloadData<D>>,
        ret: oneshot::Sender<Result<UpdateStatus>>,
    },
    ListUpdates {
        uuid: Uuid,
        ret: oneshot::Sender<Result<Vec<UpdateStatus>>>,
    },
    GetUpdate {
        uuid: Uuid,
        ret: oneshot::Sender<Result<UpdateStatus>>,
        id: u64,
    },
    Delete {
        uuid: Uuid,
        ret: oneshot::Sender<Result<()>>,
    },
    Snapshot {
        uuids: HashSet<Uuid>,
        path: PathBuf,
        ret: oneshot::Sender<Result<()>>,
    },
    Dump {
        uuids: HashSet<Uuid>,
        path: PathBuf,
        ret: oneshot::Sender<Result<()>>,
    },
    GetInfo {
        ret: oneshot::Sender<Result<UpdateStoreInfo>>,
    },
}
