# Kataw parser test case

## Input

`````js
example.inner?.<string>()
`````

## Options

### Parser Options

`````js
{ next: true, allowTypes : true }
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
                    "start": 13,
                    "end": 15
                },
                "member": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "example",
                        "rawText": "example",
                        "flags": 96,
                        "start": 0,
                        "end": 7
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "inner",
                        "rawText": "inner",
                        "flags": 96,
                        "start": 8,
                        "end": 13
                    },
                    "flags": 96,
                    "start": 0,
                    "end": 13
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
                                            "kind": 134234347,
                                            "flags": 2097216,
                                            "start": 16,
                                            "end": 22
                                        },
                                        "flags": 2097152,
                                        "start": 16,
                                        "end": 22
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 16,
                                "end": 22
                            },
                            "flags": 2097152,
                            "start": 15,
                            "end": 23
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 24,
                            "end": 24
                        },
                        "flags": 268435488,
                        "start": 15,
                        "end": 25
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 25
                },
                "flags": 32,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "example.inner?.<string>()",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

example.inner?.<string>();

```

### Diagnostics

```javascript
✔ No errors
```

