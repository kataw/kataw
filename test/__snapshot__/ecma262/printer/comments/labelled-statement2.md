# Kataw parser test case

## Input

`````js
/* comment 1 */


/* comment 2 */
x /* comment 3 */ : /* comment 4 */  y; /* comment 5 */




/* comment 6 */
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 97,
                "transformFlags": 0,
                "start": 0,
                "end": 35
            },
            "colonToken": {
                "kind": 21,
                "flags": 64,
                "transformFlags": 0,
                "start": 35,
                "end": 53
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 53,
                    "end": 72
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 53,
                "end": 73
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 0,
            "end": 73
        }
    ],
    "isModule": false,
    "source": "/* comment 1 */\n\n\n/* comment 2 */\nx /* comment 3 */ : /* comment 4 */  y; /* comment 5 */\n\n\n\n\n/* comment 6 */",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 109
}
```

### Printed

```javascript
/* comment 1 */
/* comment 2 */
x /* comment 3 */:  y; /* comment 5 */
```

### Diagnostics

```javascript
✔ No errors
```

