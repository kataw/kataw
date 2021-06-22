# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, next: true }
`````

## Input

`````js
function f() {
  class C {
    static {
      arguments
    }
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 12
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
                                "flags": 81,
                                "start": 14,
                                "end": 22
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 96,
                                "start": 22,
                                "end": 24
                            },
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": null,
                                "body": {
                                    "kind": 303,
                                    "elements": [
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
                                                                "kind": 134299649,
                                                                "text": "arguments",
                                                                "rawText": "arguments",
                                                                "flags": 96,
                                                                "start": 39,
                                                                "end": 55
                                                            },
                                                            "flags": 16,
                                                            "start": 39,
                                                            "end": 55
                                                        }
                                                    ],
                                                    "flags": 17,
                                                    "start": 39,
                                                    "end": 55
                                                },
                                                "flags": 26,
                                                "start": 0,
                                                "end": 61
                                            },
                                            "flags": 32,
                                            "start": 26,
                                            "end": 61
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 26,
                                    "end": 61
                                },
                                "flags": 24,
                                "start": 32,
                                "end": 65
                            },
                            "flags": 17,
                            "start": 14,
                            "end": 65
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 65
                },
                "flags": 32,
                "start": 12,
                "end": 67
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 67
        }
    ],
    "isModule": false,
    "source": "function f() {\n  class C {\n    static {\n      arguments\n    }\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'arguments' is only allowed in functions and class methods - start: 39, end: 55

```

