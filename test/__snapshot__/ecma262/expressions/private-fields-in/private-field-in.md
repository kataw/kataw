  # Kataw parser test case

## Input

`````js
class C {
  #field;

  constructor() {
    for (#field in value;;) break;
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
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#field",
                                "rawText": "#field",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 18
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 9,
                            "end": 18
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 19
                        },
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 34
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 36
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 166,
                                                "forKeyword": {
                                                    "kind": 37757017,
                                                    "flags": 81,
                                                    "transformFlags": 0,
                                                    "start": 38,
                                                    "end": 46
                                                },
                                                "initializer": {
                                                    "kind": 67191035,
                                                    "text": "#field",
                                                    "rawText": "#field",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 48,
                                                    "end": 54
                                                },
                                                "inKeyword": {
                                                    "kind": 21006388,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 54,
                                                    "end": 57
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "value",
                                                    "rawText": "value",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 57,
                                                    "end": 63
                                                },
                                                "statement": {
                                                    "kind": 168,
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 63,
                                                    "end": 64
                                                },
                                                "flags": 81,
                                                "transformFlags": 0,
                                                "start": 38,
                                                "end": 64
                                            },
                                            {
                                                "kind": 168,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 64,
                                                "end": 65
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 65
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 65
                                },
                                "flags": 2048,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 65
                            },
                            "flags": 2048,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 65
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 65
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 65
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 65
        },
        {
            "kind": 150,
            "breakKeyword": {
                "kind": 37757005,
                "flags": 80,
                "transformFlags": 0,
                "start": 66,
                "end": 72
            },
            "label": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 66,
            "end": 73
        }
    ],
    "isModule": false,
    "source": "class C {\n  #field;\n\n  constructor() {\n    for (#field in value;;) break;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 79
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 63, end: 64
✖ The parser expected to find a '}' to match the '{' token here - start: 65, end: 66
✖ A 'break' statement can only be used within an enclosing iteration or switch statement. - start: 72, end: 73
✖ Declaration or statement expected - start: 73, end: 77
✖ Declaration or statement expected - start: 77, end: 79

```

