# Kataw parser test case

## Input

`````js
instance.method()<_>();
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
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 131,
                        "expression": {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "instance",
                                "rawText": "instance",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 0,
                                "end": 8
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "method",
                                "rawText": "method",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 15
                            },
                            "flags": 96,
                            "transformFlags": 2,
                            "start": 0,
                            "end": 15
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 16
                        },
                        "flags": 32,
                        "transformFlags": 1,
                        "start": 0,
                        "end": 17
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 18
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "_",
                        "rawText": "_",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 19
                    },
                    "flags": 32,
                    "transformFlags": 5120,
                    "start": 0,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 20
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 20
                },
                "flags": 32,
                "transformFlags": 5120,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "instance.method()<_>();",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 22, end: 23
✖ Expression expected - start: 22, end: 23

```

