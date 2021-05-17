# Kataw parser test case

## Input

`````js
class x extends y { foo(){ return () => () => super.foo; }}
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
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
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
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 15,
                "end": 17
            },
            "flags": 16,
            "start": 15,
            "end": 17
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
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 19,
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
                            "start": 19,
                            "end": 25
                        },
                        "flags": 16,
                        "start": 19,
                        "end": 25
                    },
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [
                                {
                                    "kind": 161,
                                    "returnKeyword": {
                                        "kind": 37757022,
                                        "flags": 0,
                                        "start": 26,
                                        "end": 33
                                    },
                                    "expression": {
                                        "kind": 271,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 0,
                                            "start": 36,
                                            "end": 39
                                        },
                                        "typeParameters": null,
                                        "parameters": [],
                                        "asyncKeyword": null,
                                        "returnType": null,
                                        "contents": {
                                            "kind": 271,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 0,
                                                "start": 42,
                                                "end": 45
                                            },
                                            "typeParameters": null,
                                            "parameters": [],
                                            "asyncKeyword": null,
                                            "returnType": null,
                                            "contents": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 225,
                                                    "superKeyword": {
                                                        "kind": 4259935,
                                                        "flags": 0,
                                                        "start": 45,
                                                        "end": 51
                                                    },
                                                    "flags": 96,
                                                    "start": 45,
                                                    "end": 51
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "start": 52,
                                                    "end": 55
                                                },
                                                "flags": 536870944,
                                                "start": 45,
                                                "end": 55
                                            },
                                            "flags": 32,
                                            "start": 39,
                                            "end": 55
                                        },
                                        "flags": 32,
                                        "start": 33,
                                        "end": 55
                                    },
                                    "flags": 16,
                                    "start": 0,
                                    "end": 26
                                }
                            ],
                            "flags": 16,
                            "start": 26,
                            "end": 56
                        },
                        "flags": 16,
                        "start": 25,
                        "end": 58
                    }
                ],
                "flags": 16,
                "start": 19,
                "end": 58
            },
            "flags": 16,
            "start": 17,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "class x extends y { foo(){ return () => () => super.foo; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 7, end: 15
✖ Expected a `;` - start: 17, end: 19
✖ Expected a `;` - start: 25, end: 26
✖ A return statement can only be used within a function_body - start: 26, end: 33
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 51, end: 52

```

