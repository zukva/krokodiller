abstract class BaseRESTService {
  abstract request?: (...args: any[]) => Promise<any>
  abstract createOrUpdate?: (...args: any[]) => Promise<any>
  abstract update?: (...args: any[]) => Promise<any>
  abstract delete?: (...args: any[]) => Promise<any>
  abstract find?: (...args: any[]) => Promise<any>
}

export default BaseRESTService
