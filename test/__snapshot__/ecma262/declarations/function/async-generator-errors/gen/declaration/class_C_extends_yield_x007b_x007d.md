# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/function/async-generator-errors/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/function/async-generator-errors/gen/declaration
> :: test: declaration
> :: case: class C extends yield { }
## Options

`````js
{}
`````
## Input

`````js
async function * gen() {class C extends yield { }}

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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 32,
                "start": 14,
                "end": 16
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 96,
                "transformFlags": 0,
                "start": 16,
                "end": 20
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 21,
                "end": 21
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
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
                                "start": 24,
                                "end": 29
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 31
                            },
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": {
                                    "kind": 279,
                                    "extendsKeyword": {
                                        "kind": 4194391,
                                        "flags": 80,
                                        "transformFlags": 0,
                                        "start": 31,
                                        "end": 39
                                    },
                                    "expression": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 39,
                                            "end": 45
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 47,
                                                "end": 47
                                            },
                                            "flags": 48,
                                            "transformFlags": 8,
                                            "start": 45,
                                            "end": 49
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 39,
                                        "end": 49
                                    },
                                    "typeParameter": null,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 39,
                                    "end": 49
                                },
                                "body": {
                                    "kind": 303,
                                    "elements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 31,
                                    "end": 31
                                },
                                "flags": 31,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 31
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 49
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 49
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 22,
                "end": 50
            },
            "returnType": null,
            "flags": 400,
            "transformFlags": 0,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "async function * gen() {class C extends yield { }}\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ';' expected - start: 39, end: 47
✖ Missing an opening brace - '{ - start: 49, end: 50

```

