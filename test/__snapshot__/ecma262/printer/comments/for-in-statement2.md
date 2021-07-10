# Kataw parser test case

## Input

`````js

      for

      /* comment 1 */


      (


        /* comment 2 */

        a



        /* comment 3 */


        in



        /* comment 4 */
         b
          /* comment 5 */ )





          /* comment 6 */ ; /* comment 7 */
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
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 10
            },
            "initializer": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 97,
                "transformFlags": 0,
                "start": 43,
                "end": 80
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 65,
                "transformFlags": 0,
                "start": 80,
                "end": 120
            },
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 97,
                "transformFlags": 0,
                "start": 120,
                "end": 158
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 186,
                "end": 219
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 0,
            "end": 219
        }
    ],
    "isModule": false,
    "source": "\n      for\n\n      /* comment 1 */\n\n\n      (\n\n\n        /* comment 2 */\n\n        a\n\n\n\n        /* comment 3 */\n\n\n        in\n\n\n\n        /* comment 4 */\n         b\n          /* comment 5 */ )\n\n\n\n\n\n          /* comment 6 */ ; /* comment 7 */",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 235
}
```

### Printed

```javascript
for (
/* comment 2 */
a in
/* comment 4 */
b);
```

### Diagnostics

```javascript
✔ No errors
```

