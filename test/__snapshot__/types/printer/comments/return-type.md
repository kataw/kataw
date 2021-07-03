# Kataw parser test case

## Input

`````js
function f(
  a: number,
// some comment here
): number {
  return a + 1;
}
`````

## Options

`````js
{ allowTypes : true }
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
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 11,
                            "end": 15
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "start": 16,
                                "end": 23
                            },
                            "flags": 2097152,
                            "start": 16,
                            "end": 23
                        },
                        "right": null,
                        "flags": 32,
                        "start": 11,
                        "end": 23
                    }
                ],
                "trailingComma": true,
                "flags": 32,
                "start": 11,
                "end": 24
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
                                "flags": 81,
                                "start": 57,
                                "end": 66
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 66,
                                    "end": 68
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "start": 68,
                                    "end": 70
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 70,
                                    "end": 72
                                },
                                "flags": 32,
                                "start": 66,
                                "end": 72
                            },
                            "flags": 81,
                            "start": 57,
                            "end": 73
                        }
                    ],
                    "flags": 33,
                    "start": 57,
                    "end": 73
                },
                "flags": 32,
                "start": 55,
                "end": 75
            },
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234345,
                    "flags": 2097216,
                    "start": 48,
                    "end": 55
                },
                "flags": 2097152,
                "start": 48,
                "end": 55
            },
            "flags": 16,
            "start": 0,
            "end": 75
        }
    ],
    "isModule": false,
    "source": "function f(\n  a: number,\n// some comment here\n): number {\n  return a + 1;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 75
}
```

### Printed

```javascript

function f(a: number,
   // some comment here
)
 // some comment here
: number {
  return a + 1;
}

```

### Diagnostics

```javascript
✔ No errors
```

