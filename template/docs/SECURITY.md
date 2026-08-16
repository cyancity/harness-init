# Security

安全与供应链的默认基线，明示给 Agent。

## Authentication And Authorization（项目扩展时填写）

- 认证 / 授权预期。
- Secret 与环境变量规则：**永不提交 secrets / tokens / 本地私有配置**。

## Dependencies And Supply Chain

- 真实栈确定后提交可审计的依赖清单与 lockfile。
- 新的 GitHub Actions 固定到不可变 commit SHA，而非浮动 tag。
- 后续可按需加：`dependency-review-action`、`osv-scanner-action`、SBOM、`attest-build-provenance`。

## Data And External Surfaces（项目扩展时填写）

- 数据分类与保留规则。
- 外部 API / webhook / 文件上传 / 沙箱执行规则。
