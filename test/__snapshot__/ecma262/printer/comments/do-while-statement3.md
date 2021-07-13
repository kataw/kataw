# Kataw parser test case

## Input

`````js
do {} while (/* comment 1 */x/* comment 2 */) /* comment 3 */ {} /* comment 4 */
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 4
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 2,
                "end": 5
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 5,
                "end": 11
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 13,
                "end": 29
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 45
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 63,
                "end": 63
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 45,
            "end": 64
        }
    ],
    "isModule": false,
    "source": "do {} while (/* comment 1 */x/* comment 2 */) /* comment 3 */ {} /* comment 4 */",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 80
}
```

### Printed

```javascript
do  {}
while (/* comment 1 */ x /* comment 2 */); /* comment 3 */
{} /* comment 4 */

```

### Diagnostics

```javascript
✔ No errors
```

