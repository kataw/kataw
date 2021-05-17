# Kataw parser test case

## Input

`````js
class Foo extends Base {
    method() {
      super.method?.();
    }
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "start": 5,
                "end": 9
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [],
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 16,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Base",
                "rawText": "Base",
                "flags": 96,
                "start": 17,
                "end": 22
            },
            "flags": 16,
            "start": 17,
            "end": 22
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "method",
                                "rawText": "method",
                                "flags": 96,
                                "start": 24,
                                "end": 35
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 36,
                                "end": 36
                            },
                            "flags": 268435488,
                            "start": 24,
                            "end": 37
                        },
                        "flags": 16,
                        "start": 24,
                        "end": 37
                    },
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [
                                {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 205,
                                        "chainToken": {
                                            "kind": 393240,
                                            "flags": 0,
                                            "start": 58,
                                            "end": 60
                                        },
                                        "member": {
                                            "kind": 129,
                                            "member": {
                                                "kind": 225,
                                                "superKeyword": {
                                                    "kind": 4259935,
                                                    "flags": 1,
                                                    "start": 39,
                                                    "end": 51
                                                },
                                                "flags": 96,
                                                "start": 39,
                                                "end": 51
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "method",
                                                "rawText": "method",
                                                "flags": 96,
                                                "start": 52,
                                                "end": 58
                                            },
                                            "flags": 536870944,
                                            "start": 39,
                                            "end": 58
                                        },
                                        "chain": {
                                            "kind": 206,
                                            "chain": {
                                                "kind": 204,
                                                "chain": null,
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 61,
                                                    "end": 61
                                                },
                                                "flags": 268435488,
                                                "start": 60,
                                                "end": 62
                                            },
                                            "flags": 32,
                                            "start": 60,
                                            "end": 62
                                        },
                                        "flags": 32,
                                        "start": 39,
                                        "end": 62
                                    },
                                    "flags": 16,
                                    "start": 39,
                                    "end": 63
                                }
                            ],
                            "flags": 17,
                            "start": 39,
                            "end": 63
                        },
                        "flags": 16,
                        "start": 37,
                        "end": 69
                    }
                ],
                "flags": 17,
                "start": 24,
                "end": 69
            },
            "flags": 16,
            "start": 22,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "class Foo extends Base {\n    method() {\n      super.method?.();\n    }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 9, end: 17
✖ Expected a `;` - start: 22, end: 24
✖ Expected a `;` - start: 37, end: 39
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 51, end: 52

```

