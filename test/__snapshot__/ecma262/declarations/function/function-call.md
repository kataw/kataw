# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
function foo():any{return ""};
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
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 8,
                "end": 12
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 13,
                "end": 13
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 80,
                                "start": 19,
                                "end": 25
                            },
                            "expression": {
                                "kind": 201392131,
                                "text": "",
                                "rawText": "\"\"",
                                "flags": 96,
                                "start": 25,
                                "end": 28
                            },
                            "flags": 80,
                            "start": 19,
                            "end": 28
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 28
                },
                "flags": 32,
                "start": 18,
                "end": 29
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234252,
                    "flags": 2097216,
                    "start": 15,
                    "end": 18
                },
                "flags": 2097152,
                "start": 15,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 29
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 29,
            "end": 30
        }
    ],
    "isModule": true,
    "source": "function foo():any{return \"\"};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

function foo(): any {
  return  "\"\"";
}

```

### Diagnostics

```javascript
✔ No errors
```

