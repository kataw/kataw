# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
class C {
  static foo() {}
  @dec
  static {
    this.bar = this.foo;
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
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 9,
                                "end": 18
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 18,
                                    "end": 22
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 23,
                                    "end": 24
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 26,
                                        "end": 26
                                    },
                                    "flags": 32,
                                    "start": 24,
                                    "end": 27
                                },
                                "flags": 0,
                                "start": 22,
                                "end": 27
                            },
                            "flags": 0,
                            "start": 18,
                            "end": 27
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 27
                },
                "flags": 7,
                "start": 32,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
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
                            "text": "dec",
                            "rawText": "dec",
                            "flags": 96,
                            "start": 31,
                            "end": 34
                        },
                        "flags": 1,
                        "start": 31,
                        "end": 34
                    }
                ],
                "flags": 32,
                "start": 31,
                "end": 34
            },
            "classKeyword": null,
            "name": null,
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "this",
                                "rawText": "this",
                                "flags": 96,
                                "start": 45,
                                "end": 54
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 45,
                            "end": 54
                        }
                    ],
                    "flags": 32,
                    "start": 45,
                    "end": 54
                },
                "flags": 43,
                "start": 32,
                "end": 54
            },
            "flags": 16,
            "start": 27,
            "end": 54
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "start": 55,
                    "end": 58
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 58,
                    "end": 60
                },
                "right": {
                    "kind": 129,
                    "member": {
                        "kind": 135,
                        "flags": 96,
                        "start": 60,
                        "end": 65
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 66,
                        "end": 69
                    },
                    "flags": 536870944,
                    "start": 60,
                    "end": 69
                },
                "flags": 32,
                "start": 55,
                "end": 69
            },
            "flags": 16,
            "start": 55,
            "end": 70
        }
    ],
    "isModule": false,
    "source": "class C {\n  static foo() {}\n  @dec\n  static {\n    this.bar = this.foo;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 76
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 27, end: 31
✖ A class declaration without the 'default' modifier must have a name. - start: 43, end: 45
✖ The parser expected to find a '}' to match the '{' token here - start: 54, end: 55
✖ Declaration or statement expected - start: 70, end: 74
✖ Declaration or statement expected - start: 74, end: 76

```

