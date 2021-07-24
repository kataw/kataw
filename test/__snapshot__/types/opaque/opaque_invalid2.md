# Kataw parser test case

## Input

`````js
opaque potato FBID = number;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                "kind": 134299649,
                "text": "opaque",
                "rawText": "opaque",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "potato",
                "rawText": "potato",
                "flags": 96,
                "transformFlags": 0,
                "start": 6,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 6,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "FBID",
                    "rawText": "FBID",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 18
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 20
                },
                "right": {
                    "kind": 134299649,
                    "text": "number",
                    "rawText": "number",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 27
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 13,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "opaque potato FBID = number;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '; ' is not allowed here. Did you mean ';'? - start: 6, end: 13
✖ '; ' is not allowed here. Did you mean ';'? - start: 13, end: 18

```

