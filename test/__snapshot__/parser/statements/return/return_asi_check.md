# Kataw parser test case

## Input

`````js
function f(){   return
 foo;    }
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
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 80,
                                "start": 13,
                                "end": 22
                            },
                            "expression": null,
                            "flags": 80,
                            "start": 13,
                            "end": 22
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 22,
                                "end": 27
                            },
                            "flags": 16,
                            "start": 22,
                            "end": 28
                        }
                    ],
                    "flags": 32,
                    "start": 13,
                    "end": 28
                },
                "flags": 32,
                "start": 12,
                "end": 33
            },
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "function f(){   return\n foo;    }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

 function f() {
return;
foo;
} 
```

### Diagnostics

```javascript
✔ No errors
```

