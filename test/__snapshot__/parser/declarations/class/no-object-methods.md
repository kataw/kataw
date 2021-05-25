# Kataw parser test case

## Input

`````js
var o = {
  @baz
  foo() {
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "o",
                            "rawText": "o",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 9,
                                "end": 9
                            },
                            "flags": 49,
                            "start": 7,
                            "end": 9
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": {
                "kind": 207,
                "decoratorList": [
                    {
                        "kind": 34611453,
                        "expression": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "start": 13,
                            "end": 16
                        },
                        "flags": 1,
                        "start": 13,
                        "end": 16
                    }
                ],
                "flags": 32,
                "start": 13,
                "end": 16
            },
            "classKeyword": null,
            "name": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 22,
                "end": 22
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 22,
                    "end": 22
                },
                "flags": 22,
                "start": 32,
                "end": 22
            },
            "flags": 16,
            "start": 9,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": null,
                "typeParameters": null,
                "parameters": [],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 26,
                    "end": 26
                },
                "flags": 32,
                "start": 22,
                "end": 26
            },
            "flags": 16,
            "start": 22,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "var o = {\n  @baz\n  foo() {\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 9, end: 13
✖ Binding identifier expected - start: 22, end: 23
✖ Expression expected - start: 26, end: 30
✖ Declaration or statement expected - start: 30, end: 32

```

