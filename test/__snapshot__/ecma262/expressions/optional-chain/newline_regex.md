# Kataw parser test case

## Input

`````js
a?.b
/c/
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
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 3
                        },
                        "member": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 1
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 3,
                                    "end": 4
                                },
                                "flags": 32,
                                "transformFlags": 2,
                                "start": 3,
                                "end": 4
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 4
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 4
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 97,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 6
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 7
                    },
                    "flags": 33,
                    "transformFlags": 5120,
                    "start": 0,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 8
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 8
                },
                "flags": 33,
                "transformFlags": 5120,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "a?.b\n/c/",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 8, end: 8

```

