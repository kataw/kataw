# Kataw parser test case

## Input

`````js
async function foo() {
  function await() {}
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 18
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 19,
                "end": 19
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 33
                            },
                            "asteriskToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "await",
                                "rawText": "await",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 39
                            },
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 40,
                                "end": 40
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 43,
                                    "end": 43
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 44
                            },
                            "returnType": null,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 44
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 44
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 20,
                "end": 46
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "async function foo() {\n  function await() {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'await' as a name on a async function declaration - start: 33, end: 39

```

