# Kataw parser test case

## Input

`````js
var {x:y=z}, {a:b=c} = obj;
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 5,
                                            "end": 6
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 7,
                                            "end": 8
                                        },
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 10
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 11
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 11
                    },
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 14,
                                            "end": 15
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 19
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 19
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 20
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 26
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 12,
                        "end": 26
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "var {x:y=z}, {a:b=c} = obj;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing initializer in destructuring declaration - start: 11, end: 12

```

