# Kataw parser test case

## Input

`````js
{ import("dsa").then(); }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 129,
                                "member": {
                                    "kind": 206,
                                    "importKeyword": {
                                        "kind": 37814364,
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 1,
                                        "end": 8
                                    },
                                    "expression": {
                                        "kind": 201392131,
                                        "text": "dsa",
                                        "rawText": "\"dsa\"",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 14
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 15
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "then",
                                    "rawText": "then",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 16,
                                    "end": 20
                                },
                                "flags": 32,
                                "transformFlags": 2,
                                "start": 1,
                                "end": 20
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 21
                            },
                            "flags": 32,
                            "transformFlags": 1,
                            "start": 1,
                            "end": 22
                        },
                        "flags": 16,
                        "transformFlags": 4096,
                        "start": 1,
                        "end": 23
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "{ import(\"dsa\").then(); }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

{
    import('dsa').then();
}

```

### Diagnostics

```javascript
✔ No errors
```

