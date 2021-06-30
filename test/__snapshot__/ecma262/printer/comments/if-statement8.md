# Kataw parser test case

## Input

`````js
if /* comment 1 */ (/* comment 2 */x/* comment 3 */) /* comment 4 */ {/* comment 5 */} // comment 6




// comment 7
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
                "end": 36
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 70,
                    "end": 70
                },
                "flags": 16,
                "start": 52,
                "end": 86
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 80,
            "start": 0,
            "end": 86
        }
    ],
    "isModule": false,
    "source": "if /* comment 1 */ (/* comment 2 */x/* comment 3 */) /* comment 4 */ {/* comment 5 */} // comment 6\n\n\n\n\n// comment 7",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 116
}
```

### Printed

```javascript

if/* comment 1 */ (/* comment 2 */x/* comment 3 */)/* comment 4 */ {/* comment 5 */ }// comment 6
 // comment 7

```

### Diagnostics

```javascript
✔ No errors
```

