# Contributing

We welcome community contributions to the EPPEY project! Please read each of the following steps below to see how you can get started.

1. Open or assign yourself to an Issue from the EPPEY [website repo](https://github.com/Eppey/eppey).

   A rough overview of the tagging convention is as follows:

   - An Issue with the `bug` tag is a bug report that should include details on how to reproduce the buggy behavior
   - An Issue with the `feature request` tag is a feature request that can be addressed:
     - directly with an implementation pull request
     - or by using a separate (informal) RFC (request for comments) Issue tagged with `rfc` to facilitate design discussion and lead to an eventual implementation.
   - An Issue with the `task` tag is designed to be a well-scoped unit of work made by the project maintainers, usually in the context of [EPPEY](https://github.com/Eppey) development. However, if an Issue with the `task` tag also has the `work needed` tag, feel free to assign yourself to it and work on it.

2. If you are a maintainer or EPPEY contributor with write access to the repository, feel create to create a branch directly using the described branching conventions here. For outside contributors, please fork the appropriate code repository that you are working on to your personal account.

   Then, please create a new branch named using the following format:

   ```
   [your-first-name]/[issue-#]-[slug]
   ```

   For example, if...

   - my first name was `Chris`
   - I assigned myself to Issue `#31`
   - Issue #31 is titled `"Add email support"`

   Then I would name my branch:

   ```
   chris/31-email-support
   ```

3. Do whatever the Issue asks in your branch (whether that be implementing a new feature or fixing an existing bug)
4. Make a PR between your branch and the primary branch (`main`) that links to the Issue you want to resolve.
5. Get at least one other contributor to review your PR and make comments when necessary.
6. Merge your PR once it has been approved!

If you have any questions or concerns, feel free to [open a discussion](https://github.com/Eppey/eppey/discussions) on this repository.
