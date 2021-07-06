while-statement6# Kataw parser test case

## Input

`````js
/**
 * @class MyClass
 */
function MyClass() {}
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
                "flags": 65,
                "transformFlags": 0,
                "start": 0,
                "end": 34
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "MyClass",
                "rawText": "MyClass",
                "flags": 96,
                "transformFlags": 0,
                "start": 34,
                "end": 42
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 43,
                "end": 43
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 46,
                    "end": 46
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 44,
                "end": 47
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "/**\n * @class MyClass\n */\nfunction MyClass() {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
function MyClass() {}
```

### Diagnostics

```javascript
✔ No errors
```

