# Kataw parser test case

## Input

`````js
a?.<number>(y)
`````

## Options

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
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "member": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 204,
                        "chain": null,
                        "typeArguments": {
                            "kind": 310,
                            "typeInstantiations": {
                                "kind": 309,
                                "types": [
                                    {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 2097216,
                                            "start": 4,
                                            "end": 10
                                        },
                                        "flags": 2097152,
                                        "start": 4,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 4,
                                "end": 10
                            },
                            "flags": 2097152,
                            "start": 3,
                            "end": 11
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 12,
                                    "end": 13
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 12,
                            "end": 13
                        },
                        "flags": 268435488,
                        "start": 3,
                        "end": 14
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 14
                },
                "flags": 32,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "a?.<number>(y)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

a?.< number >( y );

```

### Diagnostics

```javascript
✔ No errors
```

