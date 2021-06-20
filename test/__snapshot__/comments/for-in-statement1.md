# Kataw parser test case

## Input

`````js
for /* comment 1 */ ( /* comment 2 */ a  /* comment 3 */ in /* comment 4 */  b /* comment 5 */ ) /* comment 6 */ ; /* comment 7 */
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 21,
                "end": 39
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 39,
                "end": 59
            },
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 59,
                "end": 78
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 96,
                "end": 114
            },
            "flags": 80,
            "start": 0,
            "end": 114
        }
    ],
    "isModule": false,
    "source": "for /* comment 1 */ ( /* comment 2 */ a  /* comment 3 */ in /* comment 4 */  b /* comment 5 */ ) /* comment 6 */ ; /* comment 7 */",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 130
}
```

### Printed

```javascript

 for/* comment 1 */ (/* comment 2 */a/* comment 3 */ in/* comment 4 */ b/* comment 5 */)/* comment 6 */ ;/* comment 7 */ 
```

### Diagnostics

```javascript
✔ No errors
```

