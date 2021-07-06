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
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "func",
                "rawText": "func",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 13
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 15
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 16
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 16,
                "end": 16
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 16
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
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 19
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 22
                        },
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 22
                    }
                ],
                "flags": 32,
                "transformFlags": 0,
                "start": 16,
                "end": 22
            },
            "classKeyword": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 22,
                "end": 24
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 24
                },
                "flags": 24,
                "transformFlags": 0,
                "start": 32,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 16,
            "end": 24
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 27,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 25,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "function func(x,  @foo x) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 18, end: 19
✖ Missing an opening brace - '{ - start: 24, end: 25

```

