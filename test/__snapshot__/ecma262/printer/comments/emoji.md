# Kataw parser test case

## Input

`````js
/* #2091 */

const test = '💖'
// This comment
// should not get collapsed
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 0,
                "end": 18
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "test",
                            "rawText": "test",
                            "flags": 96,
                            "start": 18,
                            "end": 23
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392131,
                            "text": "💖",
                            "rawText": "'💖'",
                            "flags": 4194400,
                            "start": 25,
                            "end": 30
                        },
                        "flags": 16,
                        "start": 18,
                        "end": 30
                    }
                ],
                "flags": 16777232,
                "start": 18,
                "end": 30
            },
            "flags": 33554448,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "/* #2091 */\n\nconst test = '💖'\n// This comment\n// should not get collapsed",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 74
}
```

### Printed

```javascript
/* #2091 */
const  test = "'💖'" ;
 // This comment
// should not get collapsed

```

### Diagnostics

```javascript
✔ No errors
```

