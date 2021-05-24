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
                "start": 0,
                "end": 7
            },
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 7,
                "end": 16
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 16,
                "end": 20
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 23,
                "end": 25
            },
            "contents": null,
            "typeParameters": {
                "kind": 265,
                "typeParameters": [
                    {
                        "kind": 146,
                        "name": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 21,
                            "end": 22
                        },
                        "type": null,
                        "defaultType": null,
                        "flags": 0,
                        "start": 21,
                        "end": 22
                    }
                ],
                "flags": 0,
                "start": 20,
                "end": 23
            },
            "returnType": {
                "kind": 139,
                "type": {
                    "kind": 138477615,
                    "flags": 64,
                    "start": 26,
                    "end": 31
                },
                "flags": 0,
                "start": 7,
                "end": 31
            },
            "flags": 16,
            "start": 7,
            "end": 31
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 31,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "declare function foo<T>(): void;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

function foo();

```

### Diagnostics

```javascript
✔ No errors
```

