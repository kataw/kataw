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
                "flags": 80,
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
                "elements": [
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 65,
                            "start": 9,
                            "end": 13
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "baz",
                            "rawText": "baz",
                            "flags": 96,
                            "start": 13,
                            "end": 16
                        },
                        "flags": 0,
                        "start": 13,
                        "end": 16
                    }
                ],
                "flags": 32,
                "start": 9,
                "end": 16
            },
            "classKeyword": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 16,
                "end": 22
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "start": 22,
                    "end": 22
                },
                "flags": 22,
                "start": 32,
                "end": 22
            },
            "flags": 17,
            "start": 9,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 0,
                    "start": 23,
                    "end": 23
                },
                "returnType": null,
                "arrowToken": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 33,
                        "start": 26,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 24,
                    "end": 30
                },
                "flags": 32,
                "start": 22,
                "end": 30
            },
            "flags": 16,
            "start": 22,
            "end": 30
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
✖ The parser expected to find a '}' to match the '{' token here - start: 12, end: 13
✖ Missing an opening brace - '{ - start: 22, end: 23
✖ Declaration or statement expected - start: 30, end: 32

```

