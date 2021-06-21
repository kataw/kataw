# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
class C {
  static foo() {}
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
                "flags": 80,
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
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 9,
                                "end": 18
                            },
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
                                    "flags": 96,
                                    "start": 18,
                                    "end": 22
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 23,
                                    "end": 24
                                },
                                "returnType": null,
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
                        },
                        {
                            "kind": 305,
                            "decorators": null,
                            "declaredKeyword": null,
                            "staticKeyword": null,
                            "block": {
                                "kind": 124,
                                "block": {
                                    "kind": 249,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 97,
                                                        "start": 38,
                                                        "end": 47
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 96,
                                                        "start": 48,
                                                        "end": 51
                                                    },
                                                    "flags": 536870944,
                                                    "start": 38,
                                                    "end": 51
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 51,
                                                    "end": 53
                                                },
                                                "right": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 96,
                                                        "start": 53,
                                                        "end": 58
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 59,
                                                        "end": 62
                                                    },
                                                    "flags": 536870944,
                                                    "start": 53,
                                                    "end": 62
                                                },
                                                "flags": 32,
                                                "start": 38,
                                                "end": 62
                                            },
                                            "flags": 16,
                                            "start": 38,
                                            "end": 63
                                        }
                                    ],
                                    "flags": 17,
                                    "start": 38,
                                    "end": 63
                                },
                                "flags": 27,
                                "start": 0,
                                "end": 67
                            },
                            "flags": 32,
                            "start": 27,
                            "end": 67
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 67
                },
                "flags": 7,
                "start": 32,
                "end": 69
            },
            "flags": 16,
            "start": 0,
            "end": 69
        }
    ],
    "isModule": false,
    "source": "class C {\n  static foo() {}\n  static {\n    this.bar = this.foo;\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 69
}
```

### Printed

```javascript

 class C {
    static foo() {
    },
} 
```

### Diagnostics

```javascript
✔ No errors
```

