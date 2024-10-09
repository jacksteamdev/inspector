import { JSONRPCMessage } from "../types.js";

/**
 * Describes the minimal contract for a MCP transport that a client or server can communicate over.
 */
export interface Transport {
  /**
   * Sends a JSON-RPC message (request or response).
   */
  send(message: JSONRPCMessage): Promise<void>;

  /**
   * Closes the connection.
   */
  close(): Promise<void>;

  /**
   * Callback for when the connection is closed for any reason.
   *
   * This should be invoked when close() is called as well.
   */
  onclose?: () => void;

  /**
   * Callback for when an error occurs.
   *
   * Note that errors are not necessarily fatal; they are used for reporting any kind of exceptional condition out of band.
   */
  onerror?: (error: Error) => void;

  /**
   * Callback for when a message (request or response) is received over the connection.
   */
  onmessage?: (message: JSONRPCMessage) => void;
}