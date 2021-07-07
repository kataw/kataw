# Kataw parser test case

## Input

`````js
class Foo {
  #x;
  constructor() {
    delete this?.#x;
  }
}
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
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
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 9
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
                                "text": "#x",
                                "rawText": "#x",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 16
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 11,
                            "end": 16
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 17
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
                                    "start": 17,
                                    "end": 31
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 33
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 126,
                                                    "operandToken": {
                                                        "kind": 4259886,
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 35,
                                                        "end": 46
                                                    },
                                                    "operand": {
                                                        "kind": 205,
                                                        "chainToken": {
                                                            "kind": 393240,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 51,
                                                            "end": 53
                                                        },
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 46,
                                                            "end": 51
                                                        },
                                                        "chain": {
                                                            "kind": 302,
                                                            "chain": {
                                                                "kind": 202,
                                                                "chain": null,
                                                                "expression": {
                                                                    "kind": 67191035,
                                                                    "text": "#x",
                                                                    "rawText": "#x",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 53,
                                                                    "end": 55
                                                                },
                                                                "flags": 536870944,
                                                                "transformFlags": 2,
                                                                "start": 53,
                                                                "end": 55
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 53,
                                                            "end": 55
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 46,
                                                        "end": 55
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 1024,
                                                    "start": 35,
                                                    "end": 55
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 35,
                                                "end": 56
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 35,
                                        "end": 56
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 60
                                },
                                "flags": 2048,
                                "transformFlags": 0,
                                "start": 31,
                                "end": 60
                            },
                            "flags": 2048,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 60
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 60
                },
                "flags": 9,
                "transformFlags": 0,
                "start": 32,
                "end": 62
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 62
        }
    ],
    "isModule": false,
    "source": "class Foo {\n  #x;\n  constructor() {\n    delete this?.#x;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript
class Foo {
  #x;;
  constructor() {
    delete this?.#x;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

