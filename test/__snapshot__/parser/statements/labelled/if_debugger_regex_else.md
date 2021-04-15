# Kataw parser test case

## Input

`````js
function x(){
  if (x)
    debugger
    / /;
  else;
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37814362,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
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
                            "kind": 164,
                            "ifKeyword": {
                                "kind": 37757019,
                                "flags": 768,
                                "start": 13,
                                "end": 18
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 20,
                                "end": 21
                            },
                            "consequent": {
                                "kind": 171,
                                "debuggerKeyword": {
                                    "kind": 37757010,
                                    "flags": 768,
                                    "start": 22,
                                    "end": 35
                                },
                                "flags": 128,
                                "start": 22,
                                "end": 35
                            },
                            "elseKeyword": null,
                            "alternate": null,
                            "flags": 128,
                            "start": 13,
                            "end": 35
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 221,
                                "text": "/ /",
                                "flags": 768,
                                "start": 35,
                                "end": 43
                            },
                            "flags": 128,
                            "start": 35,
                            "end": 44
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 13,
                    "end": 44
                },
                "flags": 256,
                "start": 12,
                "end": 44
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 256,
            "start": 0,
            "end": 44
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 51,
            "end": 52
        }
    ],
    "isModule": false,
    "text": "function x(){\n  if (x)\n    debugger\n    / /;\n  else;\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44,
            "end": 51
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 44,
            "end": 51
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 52,
            "end": 54
        }
    ],
    "start": 0,
    "end": 54
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

