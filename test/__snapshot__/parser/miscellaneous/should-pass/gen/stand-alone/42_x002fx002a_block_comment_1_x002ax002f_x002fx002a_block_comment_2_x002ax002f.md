# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: e
> :: test: stand-alone
> :: case: 42 /* block comment 1 */ /* block comment 2 */
## Options

`````js
{}
`````
## Input

`````js
42 /* block comment 1 */ /* block comment 2 */
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 42,
                "rawText": "42",
                "flags": 96,
                "start": 0,
                "end": 2
            },
            "flags": 16,
            "start": 0,
            "end": 2
        }
    ],
    "isModule": false,
    "source": "42 /* block comment 1 */ /* block comment 2 */",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

 42;/* block comment 1 */ /* block comment 2 */ 
```

### Diagnostics

```javascript
✔ No errors
```

