export const STATUS = {
  loading: 'loading',
  creating: 'creating',
  updating: 'updating',
  deleting: 'deleting',
  // auth
  loggingIn: 'loggingIn',
  registering: 'registering',
  loggingOut: 'loggingOut',
  // card
  adding: 'adding',
  listing: 'listing',
  viewing: 'viewing',
  publishing: 'publishing',
  // common status
  init: 'init',
  success: 'success',
  error: 'error'
};

export function isInit(status) {
  return status === STATUS.init;
}

export function isLoading(status) {
  return status === STATUS.loading;
}

export function isCreating(status) {
  return status === STATUS.creating;
}

export function isUpdating(status) {
  return status === STATUS.updating;
}

export function isDeleting(status) {
  return status === STATUS.deleting;
}

export function isLoggingIn(status) {
  return status === STATUS.loggingIn;
}

export function isRegistering(status) {
  return status === STATUS.registering;
}

export function isLoggingOut(status) {
  return status === STATUS.loggingOut;
}

export function isAdding(status) {
  return status === STATUS.adding;
}

export function isListing(status) {
  return status === STATUS.listing;
}

export function isViewing(status) {
  return status === STATUS.viewing;
}

export function isPublishing(status) {
  return status === STATUS.publishing;
}

export function isSuccess(status) {
  return status === STATUS.success;
}

export function isError(status) {
  return status === STATUS.error;
}
