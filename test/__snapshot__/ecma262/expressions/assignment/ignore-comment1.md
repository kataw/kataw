  # Kataw parser test case

## Input

`````js
a
// kataw-ignore
 = a ///a

?b:c
  =


                    d
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 67108961,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 20
                },
                "right": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 22
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 65,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 30
                    },
                    "consequent": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 30,
                        "end": 31
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 31,
                        "end": 32
                    },
                    "alternate": {
                        "kind": 125,
                        "left": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 33
                        },
                        "operatorToken": {
                            "kind": 4125,
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 37
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 37,
                            "end": 61
                        },
                        "flags": 0,
                        "transformFlags": 128,
                        "start": 32,
                        "end": 61
                    },
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 61
                },
                "flags": 67108865,
                "transformFlags": 128,
                "start": 0,
                "end": 61
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "a\n// kataw-ignore\n = a ///a\n\n?b:c\n  =\n\n\n                    d",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript
a
// kataw-ignore
 = a ///a

?b:c
  =


                    d;
```

### Diagnostics

```javascript
✔ No errors
```

