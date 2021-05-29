# Kataw parser test case

## Input

`````js
function func(x,  @foo x) {}
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "func",
                "rawText": "func",
                "flags": 96,
                "start": 8,
                "end": 13
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 215,
                        "ellipsisToken": null,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 14,
                            "end": 15
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 14,
                        "end": 15
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 13,
                "end": 19
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 16,
                    "end": 16
                },
                "flags": 32,
                "start": 16,
                "end": 16
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 16
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
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 19,
                            "end": 22
                        },
                        "flags": 0,
                        "start": 19,
                        "end": 22
                    }
                ],
                "flags": 32,
                "start": 19,
                "end": 22
            },
            "classKeyword": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 22,
                "end": 24
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 24,
                    "end": 24
                },
                "flags": 24,
                "start": 32,
                "end": 24
            },
            "flags": 16,
            "start": 16,
            "end": 24
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 27,
                "end": 27
            },
            "flags": 16,
            "start": 25,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "function func(x,  @foo x) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 16, end: 19
✖ Expression expected - start: 16, end: 19
✖ Missing an opening brace - '{ - start: 24, end: 25

```

