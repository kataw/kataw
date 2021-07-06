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
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 11
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
                                "flags": 81,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 18
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 21
                            },
                            "consequent": {
                                "kind": 171,
                                "debuggerKeyword": {
                                    "kind": 37757010,
                                    "flags": 81,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 35
                                },
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 35
                            },
                            "elseKeyword": null,
                            "alternate": null,
                            "flags": 81,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 35
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 371,
                                "text": "/ /",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 43
                            },
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 35,
                            "end": 44
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 44
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 12,
                "end": 44
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 44
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 51,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "function x(){\n  if (x)\n    debugger\n    / /;\n  else;\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 47, end: 51
✖ Declaration or statement expected - start: 52, end: 54

```

