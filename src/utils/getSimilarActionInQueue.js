// @flow
import { isEqual } from 'lodash';

/**
 * Finds and returns a similar thunk or action in the actionQueue.
 * Else undefined.
 * @param action
 * @param actionQueue
 */
export default function getSimilarActionInQueue(
  action: *,
  actionQueue: Array<*>,
) {
  if (typeof action === 'object') {
    return actionQueue.find((queued: *) => isEqual(queued, action));
  }
  if (typeof action === 'function') {
    return actionQueue.find(
      (queued: *) => action.toString() === queued.toString(),
    );
  }
  return undefined;
}
