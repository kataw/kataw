# Kataw parser test case

## Input

`````js
"\P"
;
"prefix\Q"
;
"\Rsuffix"
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
                "kind": 201392131,
                "text": "P",
                "rawText": "\"\\P\"",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "prefixQ",
                "rawText": "\"prefix\\Q\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 6,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 6,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "Rsuffix",
                "rawText": "\"\\Rsuffix\"",
                "flags": 97,
                "transformFlags": 0,
                "start": 19,
                "end": 30
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 19,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "\"\\P\"\n;\n\"prefix\\Q\"\n;\n\"\\Rsuffix\"",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
"\"P\"";
"\"prefixQ\"";

"\"Rsuffix\"";

```

### Diagnostics

```javascript
✔ No errors
```

