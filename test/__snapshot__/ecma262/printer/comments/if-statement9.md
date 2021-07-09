# Kataw parser test case

## Input

`````js
if /* comment 1 */ (/* comment 2 */x/* comment 3 */) /* comment 4 */ {/* comment 5 */} /* comment 6 */ else /* comment 7 */{

/* comment 8 */
/* comment 9 */
/* comment 10 */
/* comment 11 */
/* comment 12 */

// comment 13
// comment 14
// comment 15

}


/* comment 16 */
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
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 20,
                "end": 36
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 70,
                    "end": 70
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 52,
                "end": 86
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "transformFlags": 0,
                "start": 86,
                "end": 107
            },
            "alternate": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 17,
                    "transformFlags": 0,
                    "start": 124,
                    "end": 124
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 107,
                "end": 254
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 254
        }
    ],
    "isModule": false,
    "source": "if /* comment 1 */ (/* comment 2 */x/* comment 3 */) /* comment 4 */ {/* comment 5 */} /* comment 6 */ else /* comment 7 */{\n\n/* comment 8 */\n/* comment 9 */\n/* comment 10 */\n/* comment 11 */\n/* comment 12 */\n\n// comment 13\n// comment 14\n// comment 15\n\n}\n\n\n/* comment 16 */",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 273
}
```

### Printed

```javascript
if (x) {}
else  {}
```

### Diagnostics

```javascript
✔ No errors
```

