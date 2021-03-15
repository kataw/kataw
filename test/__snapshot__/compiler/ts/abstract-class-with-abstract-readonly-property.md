# Kataw parser test case

## Input

`````js
abstract class Foo {
  public abstract readonly foo = 'string';
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "abstract class Foo {\n  public abstract readonly foo = 'string';\n}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 14,
                "end": 18
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 47,
                            "end": 51
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": true,
                        "isReadOnly": true,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 4261583,
                            "text": "string",
                            "rawText": "string",
                            "flags": 33554432,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 53,
                            "end": 62
                        },
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194494,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 20,
                            "end": 29
                        },
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 20,
                        "end": 63
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 20,
                "end": 65
            },
            "decorators": null,
            "isAbstract": true,
            "flags": 536870912,
            "symbol": null,
            "transformFlags": 2097153,
            "start": 8,
            "end": 65
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 65
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

