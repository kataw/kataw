# Kataw parser test case

## Input

`````js
declare function foo<T>(): void;
`````

## Options

### Parser Options

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
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 7,
                "end": 16
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 16,
                "end": 20
            },
            "typeParameters": {
                "kind": 307,
                "declarations": {
                    "kind": 337,
                    "parameters": [
                        {
                            "kind": 146,
                            "name": {
                                "kind": 134299649,
                                "text": "T",
                                "rawText": "T",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 22
                            },
                            "type": null,
                            "assignToken": null,
                            "defaultType": null,
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 22
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 22
                },
                "flags": 2097152,
                "transformFlags": 512,
                "start": 20,
                "end": 23
            },
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 24,
                "end": 24
            },
            "contents": null,
            "returnType": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 138477615,
                    "flags": 2097216,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 31
                },
                "flags": 2097152,
                "transformFlags": 0,
                "start": 26,
                "end": 31
            },
            "flags": 4112,
            "transformFlags": 0,
            "start": 7,
            "end": 31
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 31,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "declare function foo<T>(): void;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript
declare function foo<T>(): void;
```

### Diagnostics

```javascript
✔ No errors
```

