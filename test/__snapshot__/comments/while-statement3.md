# Kataw parser test case

## Input

`````js
if /* comment 1 */ (
  /* comment 2 */
  x/* comment 3 */)/* comment 4 */ {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 20,
                "end": 42
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 75,
                    "end": 75
                },
                "flags": 16,
                "start": 58,
                "end": 76
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "start": 0,
            "end": 76
        }
    ],
    "isModule": false,
    "source": "if /* comment 1 */ (\n  /* comment 2 */\n  x/* comment 3 */)/* comment 4 */ {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 76
}
```

### Printed

```javascript

 if/* comment 1 */ (
 /* comment 2 */
x/* comment 3 */)/* comment 4 */ {  } 
```

### Diagnostics

```javascript
✔ No errors
```

