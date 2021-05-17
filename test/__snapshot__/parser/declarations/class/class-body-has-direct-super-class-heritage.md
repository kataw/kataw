# Kataw parser test case

## Input

`````js
class A {}
class B extends A {
  constructor() {
    super();
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
                "text": "A",
                "rawText": "A",
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
                "start": 9,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 1,
                "start": 10,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "B",
                "rawText": "B",
                "flags": 96,
                "start": 16,
                "end": 18
            },
            "typeParameters": null,
            "members": {
                "kind": 277,
                "classHeritage": null,
                "elements": [],
                "flags": 32,
                "start": 10,
                "end": 10
            },
            "flags": 16,
            "start": 10,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 26,
                "end": 28
            },
            "flags": 16,
            "start": 26,
            "end": 28
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
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 96,
                                "start": 30,
                                "end": 44
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 45,
                                "end": 45
                            },
                            "flags": 268435488,
                            "start": 30,
                            "end": 46
                        },
                        "flags": 16,
                        "start": 30,
                        "end": 46
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
                                            "kind": 225,
                                            "superKeyword": {
                                                "kind": 4259935,
                                                "flags": 1,
                                                "start": 48,
                                                "end": 58
                                            },
                                            "flags": 96,
                                            "start": 48,
                                            "end": 58
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 59,
                                            "end": 59
                                        },
                                        "flags": 268435488,
                                        "start": 48,
                                        "end": 60
                                    },
                                    "flags": 16,
                                    "start": 48,
                                    "end": 61
                                }
                            ],
                            "flags": 17,
                            "start": 48,
                            "end": 61
                        },
                        "flags": 16,
                        "start": 46,
                        "end": 65
                    }
                ],
                "flags": 17,
                "start": 30,
                "end": 65
            },
            "flags": 16,
            "start": 28,
            "end": 67
        }
    ],
    "isModule": false,
    "source": "class A {}\nclass B extends A {\n  constructor() {\n    super();\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Declaration or statement expected - start: 18, end: 26
✖ Expected a `;` - start: 28, end: 30
✖ Expected a `;` - start: 46, end: 48
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 58, end: 59

```

