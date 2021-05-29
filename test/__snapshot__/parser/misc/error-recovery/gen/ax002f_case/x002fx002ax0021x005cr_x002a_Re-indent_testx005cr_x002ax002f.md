# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: kataw7/test\__snapshot__/parser/misc/error-recovery/autogen.md
- Path: kataw7/test\__snapshot__\parser\misc\error-recovery\gen\ax002f_case
> :: test: a/ case
> :: case:     /*!\r     * Re-indent test\r     */
## Input

`````js
    /*!\r     * Re-indent test\r     */
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [],
    "isModule": false,
    "source": "    /*!\\r     * Re-indent test\\r     */",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
/*!\r     * Re-indent test\r     */

```

### Diagnostics

```javascript
✔ No errors
```

