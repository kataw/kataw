# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/error-recovery/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/error-recovery/gen/ax002f_case
> :: test: a/ case
> :: case:     /*!\r     * Re-indent test\r     */
## Options

`````js
{}
`````
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
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
/*!\r     * Re-indent test\r     */ /*!\r     * Re-indent test\r     */ 
```

### Diagnostics

```javascript
✔ No errors
```

