# Kataw parser test case

### Printer Options

`````js
{ printWidth: 80, singleQuote: true }
`````

### Options

`````js
{ module: true, allowTypes: true }
`````

## Input

`````js
const obj = {
  foo: "",
  [foo.bar]: ""
};

class Foo {
  foo() {}
  [foo.bar]() {}
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 9
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 19
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "",
                                            "rawText": "\"\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 23
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 13,
                                        "end": 23
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 28,
                                                    "end": 31
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 35
                                                },
                                                "flags": 96,
                                                "transformFlags": 2,
                                                "start": 28,
                                                "end": 35
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 24,
                                            "end": 36
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "",
                                            "rawText": "\"\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 37,
                                            "end": 40
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 24,
                                        "end": 40
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 40
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 11,
                            "end": 42
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 42
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 42
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 43
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 81,
                "transformFlags": 0,
                "start": 43,
                "end": 50
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 50,
                "end": 54
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
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
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 56,
                                    "end": 62
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 63,
                                    "end": 64
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 66,
                                        "end": 66
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 64,
                                    "end": 67
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 62,
                                "end": 67
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 56,
                            "end": 67
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
                                    "kind": 194,
                                    "expression": {
                                        "kind": 129,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 71,
                                            "end": 74
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 75,
                                            "end": 78
                                        },
                                        "flags": 96,
                                        "transformFlags": 2,
                                        "start": 71,
                                        "end": 78
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 67,
                                    "end": 79
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 80,
                                    "end": 81
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 83,
                                        "end": 83
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 81,
                                    "end": 84
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 79,
                                "end": 84
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 67,
                            "end": 84
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 56,
                    "end": 84
                },
                "flags": 54,
                "transformFlags": 0,
                "start": 32,
                "end": 86
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 43,
            "end": 86
        }
    ],
    "isModule": true,
    "source": "const obj = {\n  foo: \"\",\n  [foo.bar]: \"\"\n};\n\nclass Foo {\n  foo() {}\n  [foo.bar]() {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 86
}
```

### Printed

```javascript
const obj = {
    foo: '""',
    [foo.bar]: '""'
  };
class Foo {
  foo() {}
  [foo.bar]() {}
}

```

### Diagnostics

```javascript
✔ No errors
```

