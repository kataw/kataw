# Kataw parser test case

## Input

`````js
for /* comment 1 */ ( /* comment 2 */ a  /* comment 3 */ in /* comment 4 */  b /* comment 5 */ ) /* comment 6 */ ; /* comment 7 */



/*1*/
for /*2*/(x /*3*/in /*4*/ y) /*5*/ {}


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
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 21,
                "end": 39
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "transformFlags": 0,
                "start": 39,
                "end": 59
            },
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "transformFlags": 0,
                "start": 59,
                "end": 78
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 96,
                "end": 114
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 114
        },
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 114,
                "end": 143
            },
            "initializer": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 150,
                "end": 151
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "transformFlags": 0,
                "start": 151,
                "end": 159
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "transformFlags": 0,
                "start": 159,
                "end": 167
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 176,
                    "end": 176
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 168,
                "end": 177
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 114,
            "end": 177
        }
    ],
    "isModule": false,
    "source": "for /* comment 1 */ ( /* comment 2 */ a  /* comment 3 */ in /* comment 4 */  b /* comment 5 */ ) /* comment 6 */ ; /* comment 7 */\n\n\n\n/*1*/\nfor /*2*/(x /*3*/in /*4*/ y) /*5*/ {}\n\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 179
}
```

### Printed

```javascript
for (a /* comment 3 */ in b /* comment 5 */); /* comment 7 */
/*1*/
for (x /*3*/ in y) {}

```

### Diagnostics

```javascript
✔ No errors
```

