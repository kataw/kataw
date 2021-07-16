# Kataw parser test case

## Input

`````js
(a?b:c)=>0;
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
                "kind": 121,
                "expression": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 2
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 3
                    },
                    "consequent": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 4
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 5
                    },
                    "alternate": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 6
                    },
                    "flags": 96,
                    "transformFlags": 4096,
                    "start": 0,
                    "end": 6
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "transformFlags": 0,
                "start": 9,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 9,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "(a?b:c)=>0;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '; ' expected - start: 7, end: 9

```

